import Avatar from "avataaars";
import styled from "styled-components";

const StyledAvatar = styled(Avatar)`
    width: 120px;
    height: 120px;
`

const DefaultAvatar = () => (
    <StyledAvatar
      avatarStyle="Transparent"
      topType="WinterHat2"
      accessoriesType="Round"
      hairColor="Heather"
      facialHairType="Blank"
      clotheType="Hoodie"
      clotheColor="Gray01"
      eyeType="Wink"
      eyebrowType="Angry"
      mouthType="Default"
      skinColor="Yellow"
    />
);

export default DefaultAvatar;
