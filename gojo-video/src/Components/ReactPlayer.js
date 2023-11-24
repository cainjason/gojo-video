import React from 'react';
import styled from 'styled-components';


function ReactPlayer() {
  return (
    <PlayerContainer>
      <PlayerHeader>

      </PlayerHeader>
    </PlayerContainer>
  )
}

export default ReactPlayer;

const PlayerContainer = styled.div`
	background-color: lightgreen;
	height: 400px;
	width: 600px;
`;

const PlayerHeader = styled.div`
  background-color: purple;
  height: 100px;
  width: 600px;
`;

