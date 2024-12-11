export interface IProps {
  navWidth: string;
  handleBtn: () => void;
  navMargin: string;
}

const Navbar = ({ navWidth, handleBtn, navMargin }: IProps) => {
  return (
    <div
      className="h-12 bg-[#344955] text-[#FFAB00] flex items-center p-0 pr-3 fixed top-0 border-b-2 border-b-white "
      style={{ width: navWidth, marginRight: navMargin }}
    >
      <i className="fa fa-bars fa-lg" onClick={handleBtn}></i>
    </div>
  );
};

export default Navbar;
