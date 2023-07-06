import ChartLinePoint from "@common/components/chart/ChartLinePoint";
import HondaLogo from "../../assets/company-logo.png";
import { useMonitoringRealTime } from "./monitoring-realtime-model-view";
import moment from "moment";
import ChartLinePointMultipleLine from "@common/components/chart/ChartPointMultipleLine";

export const Index = () => {
  const model = useMonitoringRealTime();
  return (
    <>
      <div className="w-full h-screen bg-[#15243C] border-4 border-white">
        {/* header */}
        <div className="w-full h-[160px] border-b-4 border-white flex">
          <div className="w-[374px] bg-white flex justify-center items-center">
            <img
              src={HondaLogo}
              alt="honda logo"
              width={315}
              className="block"
            />
          </div>
          <div className="w-[1114px] flex items-center justify-center">
            <h1 className="text-[48px] text-white font-bold">
              GYV_6109764_QA2_14_54_33_GrOK0
            </h1>
          </div>
          <div className="w-[448px]">
            <div className="w-full h-1/2 border-l-4 border-b-4 border-white flex items-center pl-10">
              <h1 className="font-bold text-[32px] text-white">
                DATE {moment(model.time).format("DD - MM - YYYY")}
              </h1>
            </div>
            <div className="w-full h-1/2 border-l-4 border-white flex items-center pl-10">
              <h1 className="font-bold text-[32px] text-white">
                TIME {moment(model.time).format("HH:mm:ss")}
              </h1>
            </div>
          </div>
        </div>

        {/* content */}
        <div className="w-full flex border-b-4 border-white">
          <div className="border-r-4 border-white">
            <div className="w-[356px] h-[117px] border-b-4 border-white flex justify-center items-center">
              <h4 className="text-orange-500 text-[32px] font-[600]">
                Part Code
              </h4>
            </div>
            <div className="w-[356px] h-[117px] flex justify-center items-center">
              <h4 className="text-white text-[32px] font-bold">G2A</h4>
            </div>
          </div>
          <div className="border-r-4 border-white">
            <div className="w-[356px] h-[117px] border-b-4 border-white flex justify-center items-center">
              <h4 className="text-orange-500 text-[32px] font-[600]">
                Machine
              </h4>
            </div>
            <div className="w-[356px] h-[117px] flex justify-center items-center">
              <h4 className="text-white text-[32px] font-bold">QA1</h4>
            </div>
          </div>
          <div className="border-r-4 border-white">
            <div className="w-[398px] h-[117px] border-b-4 border-white flex justify-center items-center">
              <h4 className="text-orange-500 text-[32px] font-[600]">
                Judgement Machine
              </h4>
            </div>
            <div className="w-[398px] h-[117px] flex justify-center items-center bg-green-500">
              <h4 className="text-white text-[32px] font-bold">OK</h4>
            </div>
          </div>
          <div className="border-r-4 border-white">
            <div className="w-[405px] h-[117px] border-b-4 border-white flex justify-center items-center">
              <h4 className="text-orange-500 text-[32px] font-[600]">
                Judgement AI
              </h4>
            </div>
            <div className="w-[405px] h-[117px] flex justify-center items-center bg-red-500">
              <h4 className="text-white text-[32px] font-bold">NG</h4>
            </div>
          </div>
          <div className="border-r-4 border-white">
            <div className="w-[404px] h-[117px] border-b-4 border-white flex justify-center items-center">
              <h4 className="text-orange-500 text-[32px] font-[600]">
                Potential NG Cause
              </h4>
            </div>
            <div className="w-[382px] h-[117px] flex justify-center items-center bg-red-500">
              <h4 className="text-white text-[32px] font-bold">
                Setting Machine
              </h4>
            </div>
          </div>
        </div>
        {/* diagram 1 */}
        <div className="w-full h-[343px] border-b-4 px-5 py-4">
          <div className="w-full flex">
            <h1 className="font-bold text-white text-[24px]">
              Highlight Parameter :{" "}
              <span className="text-green-500">SPEED</span>
            </h1>
            <h1 className="font-bold text-white text-[32px] ml-[600px]">OK</h1>
          </div>
          <ChartLinePoint />
        </div>
        <div className="w-full h-[343px] border-b-4 px-5 py-4">
          <div className="w-full flex">
            <h1 className="font-bold text-white text-[24px]">
              Anomaly Parameter :{" "}
              <span className="text-red-500">ANOMALI SPEED PATTERN</span>,{" "}
              <span className="text-orange-500">RATIO</span>
            </h1>
            <h1 className="font-bold text-white text-[32px] ml-[290px]">NG</h1>
          </div>
          <ChartLinePointMultipleLine />
        </div>
      </div>
    </>
  );
};
