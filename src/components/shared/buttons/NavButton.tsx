export interface NavButtonProps {
  label: string;
  url?: string;
  selectedBtn?: NavButtonProps;
  onClick?: (btn: NavButtonProps) => void;
}

function NavButton(props: NavButtonProps) {
  return (
    <>
      <div
        onClick={() => {
          props.onClick?.(props);
        }}
        className={`flex mx-4 mt-[1rem] cursor-pointer items-start ${
          props.selectedBtn?.label === props.label
            ? "border-b-4 border-orange text-very-dark-blue"
            : "border-transparent text-dark-grayish-blue"
        }`}
      >
        <p className="font-kumbh-sans transition-colors hover:text-very-dark-blue">
          {props.label}
        </p>
      </div>
    </>
  );
}

export default NavButton;
