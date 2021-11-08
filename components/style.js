import styled from "styled-components";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
const StatusBarHeight = Constants.statusBarHeight;

//colours
export const Colors = {
  primary: "#ffffff",
  secondary: "#E5E7EB",
  tertiary: "#1F2937",
  darkLight: "#9CA3AF",
  brand: "#167e64",
  green: "#10B981",
  red: "#EF4444",
};

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 30}px;
  background-color: ${primary};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const WelcomeContainer = styled(InnerContainer)`
  padding: 25px;
  padding-top: 10px;
  justify-content: center;
`;

export const PageLogo = styled.Image`
  width: 250px;
  height: 200px;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${secondary};
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const WelcomeImage = styled.Image`
  height: 40%;
  min-width: 100%;
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 10px;

  ${(props) =>
    props.welcome &&
    `
        font-size: 35px;
    `}
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};

  ${(props) =>
    props.welcome &&
    `
        margin-bottom: 5px;
        font-weight: normal;
        `}
`;

export const StyledFormArea = styled.View`
  width: 90%;
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size: 13px
    text-align: left;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${brand};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;

  ${(props) =>
    props.google == true &&
    `
    background-color: {green};
    flex-direction: row;
    justify-content = center;
`}
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;

  ${(props) =>
    props.google == true &&
    `
    padding: 25px;
`}
`;

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
  color: ${(props) => (props.type == "SUCCESS" ? green : red)};
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${darkLight};
  margin-vertical: 10px;
`;

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const ExtraText = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${tertiary};
  font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-content: center;
`;

export const TextLinkContent = styled.Text`
  color: ${brand};
  font-size: 15px;
`;

export const RewardContainer = styled.View`
  padding-bottom: 10px;
  padding-left: 10px;
  align-self: center;
  width: 95%;
  height: 105px;
  flex-direction: row;
  background-color: white;
  border-radius: 15px;
  elevation: 5;
`;

export const RewardsImage = styled.Image`
  width: 80px;
  height: 80px;
  align-content: flex-start;
  position: relative;
`;

export const RewardsDetailsBox = styled.View`
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  background-color: transparent;
  margin-left: 90px;
`;

export const VoucherName = styled.Text`
  font-size: 16px;
  padding-top: 17px;
  padding-left: 5px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};
`;

export const VoucherDes = styled.Text`
  font-size: 11px;
  padding-top: 1px;
  padding-left: 5px;
  letter-spacing: 1px;
  color: ${tertiary};
`;

export const VoucherPoints = styled.Text`
  font-size: 18px;
  padding-top: 15px;
  padding-left: 295px;
  letter-spacing: 1px;
  color: ${tertiary};
  position: absolute;
`;

export const ClaimRewardButton = styled.TouchableOpacity`
  padding: 5px;
  background-color:green;
  justify-content: center;
  align-items: center;
  align-self: baseline;
  border-radius: 5px;
  height: 40px;
  position: absolute
  flex-direction: row;
  margin-horizontal: 275px;
  margin-vertical: 50px;


  ${(props) =>
    props.ticket == true &&
    `
    background-color: {green};
    flex-direction: row;
    justify-content = center;
`}
`;
