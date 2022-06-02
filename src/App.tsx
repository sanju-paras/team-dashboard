import React, { useState } from "react";

import styled from "styled-components";
import IconBreadcrumbs from "./components/Breadcrumbs";
import TeamMemberCard from "./components/TeamMemberCard";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import DoneIcon from "@mui/icons-material/Done";

const Container = styled.div`
  max-width: 800px;
  margin: auto;
`;

const TeamMembers = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function App() {
  const [teamMembers, setTeamMembers] = useState([
    { name: "Jax Chew", role: "Senior Delivery Lead" },
    { name: "Magnus Jason", role: "Senior Developer" },
    { name: "Magnus Jason", role: "Senior Developer" },
    { name: "Magnus Jason", role: "Senior Developer" },
    { name: "Magnus Jason", role: "Senior Developer" },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddMemberClick = () => {
    setShowAddForm(true);
  };

  const [nameField, setNameField] = useState("")
  const [roleField, setRoleField] = useState("")
  
  const handleSave = () => {
    setTeamMembers(teamMembers.concat([{"name": nameField, "role": roleField}]))
  }

  return (
    <Container>
      <IconBreadcrumbs />

      {!showAddForm && (
        <Button
          onClick={handleAddMemberClick}
          variant="outlined"
          startIcon={<GroupAddIcon />}
        >
          Add
        </Button>
      )}

      {showAddForm && (
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField onChange={(event) => setNameField(event.currentTarget.value)} required id="name" label="Name" size="small" />
          <TextField onChange={(event) => setRoleField(event.currentTarget.value)} required id="role" label="Role" size="small" />
          <Button onClick={handleSave} variant="contained" startIcon={<DoneIcon />}>
            Add
          </Button>
        </Box>
      )}

      <TeamMembers>
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={`${member.name}-${index}`} name={member.name} role={member.role} />
        ))}
      </TeamMembers>
    </Container>
  );
}

export default App;
