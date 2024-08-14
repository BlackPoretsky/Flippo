import { IIconProps } from "./types/IIconProps";

interface SwapIconProps extends IIconProps {
  type: "vertical" | "horizontal";
}

const SwapTypes = {
  vertical:
    "M8.9998 13.0001C8.71647 13.0001 8.47914 12.9041 8.2878 12.7121C8.09647 12.5201 8.00047 12.2827 7.9998 12.0001V5.82506L6.1248 7.70006C5.94147 7.8834 5.71247 7.97506 5.4378 7.97506C5.16314 7.97506 4.92547 7.8834 4.7248 7.70006C4.5248 7.50006 4.4248 7.26273 4.4248 6.98806C4.4248 6.7134 4.5248 6.47573 4.7248 6.27506L8.2998 2.70006C8.3998 2.60006 8.50814 2.52906 8.6248 2.48706C8.74147 2.44506 8.86647 2.4244 8.9998 2.42506C9.13314 2.42573 9.25814 2.4464 9.3748 2.48706C9.49147 2.52773 9.5998 2.59873 9.6998 2.70006L13.2998 6.30006C13.4998 6.50006 13.5955 6.7334 13.5868 7.00006C13.5781 7.26673 13.4741 7.50006 13.2748 7.70006C13.0748 7.8834 12.8415 7.9794 12.5748 7.98806C12.3081 7.99673 12.0748 7.90073 11.8748 7.70006L9.9998 5.82506V12.0001C9.9998 12.2834 9.9038 12.5211 9.7118 12.7131C9.5198 12.9051 9.28247 13.0007 8.9998 13.0001ZM14.9998 21.5751C14.8665 21.5751 14.7415 21.5544 14.6248 21.5131C14.5081 21.4717 14.3998 21.4007 14.2998 21.3001L10.6998 17.7001C10.4998 17.5001 10.4041 17.2667 10.4128 17.0001C10.4215 16.7334 10.5255 16.5001 10.7248 16.3001C10.9248 16.1167 11.1581 16.0207 11.4248 16.0121C11.6915 16.0034 11.9248 16.0994 12.1248 16.3001L13.9998 18.1751V12.0001C13.9998 11.7167 14.0958 11.4794 14.2878 11.2881C14.4798 11.0967 14.7171 11.0007 14.9998 11.0001C15.2825 10.9994 15.5201 11.0954 15.7128 11.2881C15.9055 11.4807 16.0011 11.7181 15.9998 12.0001V18.1751L17.8748 16.3001C18.0581 16.1167 18.2875 16.0251 18.5628 16.0251C18.8381 16.0251 19.0755 16.1167 19.2748 16.3001C19.4748 16.5001 19.5748 16.7377 19.5748 17.0131C19.5748 17.2884 19.4748 17.5257 19.2748 17.7251L15.6998 21.3001C15.5998 21.4001 15.4915 21.4711 15.3748 21.5131C15.2581 21.5551 15.1331 21.5757 14.9998 21.5751Z",
  horizontal:
    "M5.82484 16L7.69984 17.875C7.88318 18.0584 7.97484 18.2877 7.97484 18.563C7.97484 18.8384 7.88318 19.0757 7.69984 19.275C7.49984 19.475 7.26251 19.575 6.98784 19.575C6.71318 19.575 6.47551 19.475 6.27484 19.275L2.69984 15.7C2.59984 15.6 2.52884 15.4917 2.48684 15.375C2.44484 15.2584 2.42451 15.1334 2.42584 15C2.42718 14.8667 2.44818 14.7417 2.48884 14.625C2.52951 14.5084 2.60018 14.4 2.70084 14.3L6.30084 10.7C6.50084 10.5 6.73418 10.4044 7.00084 10.413C7.26751 10.4217 7.50084 10.5257 7.70084 10.725C7.88418 10.925 7.98018 11.1584 7.98884 11.425C7.99751 11.6917 7.90151 11.925 7.70084 12.125L5.82484 14H11.9998C12.2832 14 12.5208 14.096 12.7128 14.288C12.9048 14.48 13.0005 14.7174 12.9998 15C12.9992 15.2827 12.9032 15.5204 12.7118 15.713C12.5205 15.9057 12.2832 16.0014 11.9998 16H5.82484ZM18.1748 10H11.9998C11.7165 10 11.4792 9.90405 11.2878 9.71205C11.0965 9.52005 11.0005 9.28272 10.9998 9.00005C10.9992 8.71738 11.0952 8.48005 11.2878 8.28805C11.4805 8.09605 11.7178 8.00005 11.9998 8.00005H18.1748L16.2998 6.12505C16.1165 5.94172 16.0248 5.71272 16.0248 5.43805C16.0248 5.16338 16.1165 4.92572 16.2998 4.72505C16.4998 4.52505 16.7375 4.42505 17.0128 4.42505C17.2882 4.42505 17.5255 4.52505 17.7248 4.72505L21.2998 8.30005C21.3998 8.40005 21.4705 8.50838 21.5118 8.62505C21.5532 8.74172 21.5742 8.86672 21.5748 9.00005C21.5755 9.13338 21.5545 9.25838 21.5118 9.37505C21.4692 9.49172 21.3985 9.60005 21.2998 9.70005L17.6998 13.3C17.4998 13.5 17.2665 13.596 16.9998 13.588C16.7332 13.58 16.4998 13.4757 16.2998 13.275C16.1165 13.075 16.0205 12.8417 16.0118 12.575C16.0032 12.3084 16.0992 12.075 16.2998 11.875L18.1748 10Z"
};

const SwapIcon = (props: SwapIconProps) => {
  const { isDefaultFill, type = "vertical", ...otherProps } = props;

  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      fill={isDefaultFill ? "currentColor" : "--neutral-80"}
      {...otherProps}
    >
      <path d={SwapTypes[type]} />
    </svg>
  );
};

export { SwapIcon };
