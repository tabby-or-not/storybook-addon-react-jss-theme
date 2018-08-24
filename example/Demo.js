import React from 'react';
import injectSheet from 'react-jss'

const defaultTheme = {
  name: "DEFAULT",
  backgroundColor: 'azure',
  textColor: "dimgrey",
  borderRadius: "30px",
};

const darkTheme = {
  name: "DARK",
  backgroundColor: "black",
  textColor: "seashell",
  borderRadius: "100px",
};

export const getAllThemes = () => {
  return [defaultTheme, darkTheme];
};

const styles = theme => ({
  ...theme,
  width: '200px',
  lineHeight: '200px',
  textAlign: 'center',
  color: theme.textColor,
  border: '1px solid dimgrey',
})

@injectSheet(styles)
class Content extends React.Component {
  render() {
    const {children} = this.props
    <div>{children}</div>
  }

export const Demo = () => (
  <Content>Demo</Content>
);
