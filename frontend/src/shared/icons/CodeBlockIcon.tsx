import { IIconProps } from "./types/IIconProps";

const CodeBlockIcon = (props: IIconProps) => {
  const { isDefaultFill, ...otherProps } = props;

  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      fill={isDefaultFill ? "currentColor" : "--neutral-80"}
      {...otherProps}
    >
      <path d='M8.825 12L10.3 10.525C10.5 10.325 10.6 10.0917 10.6 9.825C10.6 9.55833 10.5 9.325 10.3 9.125C10.1 8.925 9.86267 8.825 9.588 8.825C9.31333 8.825 9.07567 8.925 8.875 9.125L6.7 11.3C6.6 11.4 6.529 11.5083 6.487 11.625C6.445 11.7417 6.42433 11.8667 6.425 12C6.42567 12.1333 6.44633 12.2583 6.487 12.375C6.52767 12.4917 6.59867 12.6 6.7 12.7L8.875 14.875C9.075 15.075 9.31267 15.175 9.588 15.175C9.86333 15.175 10.1007 15.075 10.3 14.875C10.4993 14.675 10.5993 14.4417 10.6 14.175C10.6007 13.9083 10.5007 13.675 10.3 13.475L8.825 12ZM15.175 12L13.7 13.475C13.5 13.675 13.4 13.9083 13.4 14.175C13.4 14.4417 13.5 14.675 13.7 14.875C13.9 15.075 14.1377 15.175 14.413 15.175C14.6883 15.175 14.9257 15.075 15.125 14.875L17.3 12.7C17.4 12.6 17.471 12.4917 17.513 12.375C17.555 12.2583 17.5757 12.1333 17.575 12C17.5743 11.8667 17.5537 11.7417 17.513 11.625C17.4723 11.5083 17.4013 11.4 17.3 11.3L15.125 9.125C15.025 9.025 14.9127 8.95 14.788 8.9C14.6633 8.85 14.538 8.825 14.412 8.825C14.286 8.825 14.161 8.85 14.037 8.9C13.913 8.95 13.8007 9.025 13.7 9.125C13.5 9.325 13.4 9.55833 13.4 9.825C13.4 10.0917 13.5 10.325 13.7 10.525L15.175 12ZM5 21C4.45 21 3.97933 20.8043 3.588 20.413C3.19667 20.0217 3.00067 19.5507 3 19V5C3 4.45 3.196 3.97933 3.588 3.588C3.98 3.19667 4.45067 3.00067 5 3H19C19.55 3 20.021 3.196 20.413 3.588C20.805 3.98 21.0007 4.45067 21 5V19C21 19.55 20.8043 20.021 20.413 20.413C20.0217 20.805 19.5507 21.0007 19 21H5ZM5 19H19V5H5V19Z' />
    </svg>
  );
};

export { CodeBlockIcon };