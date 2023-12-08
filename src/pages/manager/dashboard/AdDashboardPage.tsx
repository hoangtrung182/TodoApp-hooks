import Skills from "../../../components/dashboard/Skills";
import { useLocalStorage } from "../../../hooks/useStotage";

const AdDashboardPage = () => {
  const [user] = useLocalStorage("user", {});

  const listSkills = [
    { id: 1, name: "Vue", color: "green", percent: "79.4%" },
    { id: 2, name: "TypeScript", color: "red", percent: "69.9%" },
    { id: 3, name: "HTML", color: "yellow", percent: "56.3%" },
    { id: 4, name: "Css", color: "blue", percent: "70%" },
  ];
  return (
    <div>
      <div className="flex">
        <div className="w-1/3 px-3">
          <div className="h-[250px] mb-5 bg-white hover:shadow-lg rounded">
            <div className="p-5">
              <div className="flex items-center pb-5 mb-5 border-b border-b-slate-600">
                <span className=" rounded-[50%]">
                  <img
                    src="https://picsum.photos/120/120"
                    className=" object-cover rounded-[50%]"
                    alt=""
                  />
                </span>
                <div className="pl-[50px]">
                  <h3 className=" text-3xl text-black">{user.roles}</h3>
                  <p className="text-sm text-grey-200">{user.username}</p>
                </div>
              </div>
              <div className=" text-sm">
                Sinh ngày:
                <span className="ml-[70px]">18/2/1999</span>
              </div>
              <div className="text-sm">
                Chuyên ngành
                <span className="ml-[46px]">Front-end</span>
              </div>
            </div>
          </div>
          <div className="h-[250px] mb-5 bg-white hover:shadow-lg rounded pb-4">
            <div className="p-5 border-b border-slate-300 box-border">
              <span>Kỹ Năng</span>
            </div>
            <div className="p-5 mb-4 grow">
              {/* {listSkills.map((skill) => (
                <div key={skill.id} className="grow box-border">
                  <span>{skill.name}</span>
                  <Skills color={skill.color} number={skill.percent} />
                </div>
              ))} */}
              Vue
              <Skills color="green" number="79.4" />
              TypeScript
              <Skills color="red" number="61.5" />
              HTML
              <Skills color="yellow" number="40" />
              CSS
              <Skills color="blue" number="33.3" />
            </div>
          </div>
        </div>
        <div className="w-2/3 px-3">
          <div className="flex flex-wrap relative box-border mb-5 ">
            <div className="w-1/3 pr-[10px]">
              <div className="rounded border overflow-hidden text-gray-800 duration-200">
                <div className="flex items-center justify-center h-[100px]">
                  <i className="fa-solid fa-user bg-blue-600 h-[100px] w-[100px] flex items-center justify-center text-white text-4xl"></i>
                  <div className="flex flex-col justify-center items-center flex-1 h-full text-sm text-gray-400 bg-white">
                    <p className="text-blue-600 font-bold text-3xl">1234</p>
                    <span className="text-center text-gray-400 text-sm">
                      Hoang Trung
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/3 px-[10px]">
              <div className="rounded border overflow-hidden text-gray-800 duration-200">
                <div className="flex items-center justify-center h-[100px]">
                  <i className="fa-brands fa-rocketchat bg-green-600 h-[100px] w-[100px] flex items-center justify-center text-white text-4xl"></i>
                  <div className="flex flex-col justify-center items-center flex-1 h-full text-sm text-gray-400 bg-white">
                    <p className="text-blue-600 font-bold text-3xl">1234</p>
                    <span className="text-center text-gray-400 text-sm">
                      Hoang Trung
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/3 pl-[10px]">
              <div className="rounded border overflow-hidden text-gray-800 duration-200">
                <div className="flex items-center justify-center h-[100px]">
                  <i className="fa-solid fa-cart-shopping bg-red-600 h-[100px] w-[100px] flex items-center justify-center text-white text-4xl"></i>
                  <div className="flex flex-col justify-center items-center flex-1 h-full text-sm text-gray-400 bg-white">
                    <p className="text-blue-600 font-bold text-3xl">1234</p>
                    <span className="text-center text-gray-400 text-sm">
                      Hoang Trung
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" shadow-md h-[403px] rounded border text-gray-500 overflow-hidden bg-white">
            <div className="box-border border-b-2 border-gray-500 px-5 py-4">
              <div className="">
                <span>Danh sách</span>
                <button className="float-right py-1">
                  <span className="inline-flex items-center">Check</span>
                </button>
              </div>
            </div>
            <div className="p-5">
              <div className="w-full relative overflow-hidden box-border h-fit max-w-full bg-white text-sm text-black">
                <div className="relative flex flex-col h-full">
                  <div className="inline-block align-middle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nho"></div>
    </div>
  );
};

export default AdDashboardPage;
