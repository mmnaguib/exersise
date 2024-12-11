const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#fff] p-7 text-center mb-7 text-4xl font-extrabold">
      {children}
    </div>
  );
};

export default Heading;
