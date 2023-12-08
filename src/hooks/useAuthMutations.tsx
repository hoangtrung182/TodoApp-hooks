import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { IUser } from "../common/types";
import { signIn, signUp } from "../services/auth";
import { joiResolver } from "@hookform/resolvers/joi";
import { useLocalStorage } from "./useStotage";
import { schemaAuth } from "../common/schema";
import { useNavigate } from "react-router-dom";

type formInputType = {
  email: string;
  password: string;
  username?: string;
  roles?: string;
  permission?: Array<string>;
  status?: string;
};

type useProductMutationProps = {
  action: "LOGIN" | "REGISTER";
  defaultValues?: formInputType;
  onSuccess?: () => void;
};

export const useAuthMutations = ({
  action,
  defaultValues = { email: "", password: "" },
  onSuccess,
}: useProductMutationProps) => {
  const queryClient = useQueryClient();
  const [, setUser] = useLocalStorage("user", {});
  const { mutate, ...rest } = useMutation({
    mutationFn: async (user: IUser) => {
      switch (action) {
        case "LOGIN":
          return await signIn("/login", user);
        case "REGISTER":
          return await signUp("/register", user);
        default:
          return null;
      }
    },
    onSuccess: (data) => {
      setUser(data.user);
      queryClient.invalidateQueries("USERS_KEY");
      onSuccess && onSuccess();
    },
  });

  const form = useForm<formInputType>({
    resolver: joiResolver(schemaAuth),
    defaultValues,
  });

  const onSubmit: SubmitHandler<formInputType> = (values: IUser) => {
    mutate(values);
  };

  const onRemove = (user: IUser) => {
    mutate(user);
  };

  return {
    form,
    onSubmit,
    onRemove,
    ...rest,
  };
};
