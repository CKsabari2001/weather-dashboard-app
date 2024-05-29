import styled from "@emotion/styled";

const colors = {
  primary: "#252525",
  secondary: "#ffffff",
};

export const App = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const Container = styled.div``;
export const H2 = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 3rem;
  font-weight: 600;
  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
  color: ${colors.primary};

  span {
    font-size: 2rem;
  }
`;
export const H3 = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
  color: ${colors.primary};

  span {
    font-weight: 600;
  }
`;

export const H4 = styled.h4`
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
  color: ${colors.primary};
`;
export const H2s = styled.h5`
  background-image: "../../../public/img-01.jpg";
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
  color: ${colors.secondary};
`;

export const ImgDiv = styled.div`
  background-image: url("/img-01.jpg");
  background-size: cover;
  background-position: center;
  padding: 50px 10px;
  margin: 30px 0;
  border-radius: 15px;
  @media (min-width: 768px) {
    padding: 100px 10px;
  }
`;

export const Heading = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;

  @media (max-width: 640px) {
    text-align: center;
  }

  @media (min-width: 768px) {
    font-size: 2rem;
  }
  color: ${colors.primary};
`;
export const H2m = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  @media (min-width: 768px) {
    font-size: 4rem;
  }
  color: ${colors.primary};
`;
