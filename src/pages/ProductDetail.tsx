import { useParams } from "react-router-dom";
import useProductQuery from "../hooks/useProductQuery";
import { useLocalStorage } from "../hooks/useStotage";
import { IProduct } from "../common/types";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const { data } = useProductQuery(+id!);
  const [cart, setCart] = useLocalStorage("cart", []);
  const [quantity, setQuantity] = useState(1);
  const [isShow, setShow] = useState(false);

  const addToCart = (productId: number, quantityAdd = 1) => {
    const existingCartItem = cart.find(
      (item: IProduct) => item.id === productId
    );

    if (existingCartItem) {
      const updatedCart = cart.map((item: IProduct) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + quantityAdd }
          : item
      );
      toast.success(`Added to cart x${quantity}`, {
        autoClose: 2000,
        theme: "colored",
      });
      setCart(updatedCart);
    } else {
      toast.success(`Added to cart x${quantity}`, {
        autoClose: 2000,
        theme: "colored",
      });
      setCart([...cart, { ...data, quantity: quantityAdd }]);
    }
  };

  const descrement = () => {
    if (quantity <= 0) {
      return;
    }
    setQuantity((p) => p - 1);
  };

  const increment = () => {
    if (quantity >= data.quantity) {
      return;
    }
    setQuantity((p) => p + 1);
  };

  if (data) {
    return (
      <div className="">
        <div className="m-2 p-2 bg-white w-[1200px] mx-auto">
          Home &gt; {data.category} &gt; {data.name}
        </div>
        <div className="m-2 p-2 bg-white w-[1200px] mx-auto">
          <div className="w-[1000px] flex">
            <div className="w-1/2 p-4">
              <img
                src={data?.image}
                className=" object-cover w-[450px] h-[400px]"
                alt={data.name}
              />
            </div>
            <div className="w-1/2 ml-5 p-4 text-gray-500">
              <h1 className="text-3xl font-bold text-black">{data.name}</h1>
              <ul className="flex space-x-3 my-3">
                <li className=" border-r border-black px-3">
                  <span className="underline text-black">120</span> Đánh giá
                </li>
                <li>
                  <span className="underline text-black">20.1k</span> Đã bán
                </li>
              </ul>
              <div className="my-7">
                <ul className="flex space-x-3">
                  <li>Vận chuyển </li>
                  <li>
                    Vận chuyển tới <span className="block">Phí Vận chuyển</span>
                  </li>
                  <li className="text-black">
                    Mỹ Đình, Hà Nội, Việt Nam{" "}
                    <span className="block text-black">$ {13}</span>
                  </li>
                </ul>
              </div>
              <span className="w-[500px] bg-gray-200 text-red-500 text-xl p-2 my-3 block">
                ${data.price} - ${data.price + 150}
              </span>

              <div className="my-7 flex">
                <span>Số lượng:</span>
                <div className="mx-4 flex items-center border border-gray-500">
                  <button
                    className="w-6 h-6 text-xl leading-[24px]"
                    onClick={descrement}
                  >
                    -
                  </button>
                  <span className="mx-4 text-xl text-black">{quantity}</span>
                  <button
                    className="w-6 h-6 text-xl leading-[24px]"
                    onClick={increment}
                  >
                    {" "}
                    +{" "}
                  </button>
                </div>
                <span className="text-gray-400">
                  {data.quantity} sản phẩm còn có sẵn
                </span>
              </div>
              <div className="mt-10 space-x-3">
                <button
                  onClick={() => addToCart(data.id, quantity)}
                  className="w-[140px] py-3 bg-gray-400 mx-2 rounded text-blue-500 hover:bg-gray-300"
                >
                  ADD TO CART
                </button>
                <button className="w-[140px]  py-3 bg-blue-500 rounded text-white hover:bg-blue-300">
                  MUA NGAY
                </button>
              </div>
            </div>
            <ToastContainer />
          </div>
        </div>
        <div className="m-2 px-5  bg-white w-[1200px] mx-auto text-gray-600">
          <h3 className="text-2xl text-black my-3 py-3">Mô tả sản phẩm</h3>
          <div className="">
            <p>
              {!isShow ? data?.description?.slice(0, 200) : data?.description}
              <span
                className="underline cursor-pointer text-black"
                onClick={() => setShow(!isShow)}
              >
                {isShow ? " ẩn bớt" : " hiển thị thêm"}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>Nothing...</p>;
  }
};

export default ProductDetail;
