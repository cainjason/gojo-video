import React from 'react'
import styled from 'styled-components';

function Sidebar() {
  return (
    <SidebarContainer>
      <h3>Video One</h3>
			<h3>Video Two</h3>
			<h3>Video Three</h3>
    </SidebarContainer>
  )
}

export default Sidebar;

const SidebarContainer = styled.div``;
