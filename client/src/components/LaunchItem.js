import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const LaunchItemCard = styled.div`
  border: 1px solid #a6a9ac;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  background-color: #ccdae6;
  box-shadow: 1px 1px 1px #ddd;

  > div {
    display: flex;
    flex-direction: column;
  }

  div:last-of-type {
    justify-content: center;
  }
`;

const MissionName = styled.span`
  ${({ success }) =>
    (success &&
      css`
        color: green;
      `) ||
    (success === null &&
      css`
        color: gray;
      `) ||
    (!success &&
      css`
        color: red;
      `)}
`;

const StyledLink = styled(Link)`
  color: white;
  background-color: #225187;
  border: 2px solid #225187;
  padding: 5px;
  border-radius: 2px;
`;

const LaunchItem = ({
  launch: { flight_number, mission_name, launch_date_local, launch_success },
}) => {
  return (
    <LaunchItemCard>
      <div>
        <div>
          Mission:{" "}
          <MissionName success={launch_success}>{mission_name}</MissionName>
        </div>
        <div>
          Date: <Moment format="YYYY/MM/DD - HH:mm">{launch_date_local}</Moment>
        </div>
      </div>
      <div>
        <StyledLink to={`/launch/${flight_number}`}>Launch Details</StyledLink>
      </div>
    </LaunchItemCard>
  );
};

export default LaunchItem;
