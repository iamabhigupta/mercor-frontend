import apple from '../assets/apple.svg';

interface Props {
  label: string;
  img: string;
}

const DownloadButton = ({ label, img }: Props) => {
  return (
    <button className="h-[50px] flex items-center border-[1px] rounded-[7px] justify-between w-[170px] p-[25px]">
      <img src={img} alt="apple" />
      <span className="text-[14px] font-bold">{label}</span>
    </button>
  );
};

export default DownloadButton;
