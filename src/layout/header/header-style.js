import { styled } from "styled-components";
import { COLORS } from "../../config/colors";

export const HeaderTopWrapper = styled.div`
display:flex;
justify-content:space-between;

`;

export const Navbar = styled.div`
  display: flex;
  max-width: 467px;

  span {
    height: 11px;
    width: 1px;
    color: ${COLORS.grey[500]};
  }
`;

