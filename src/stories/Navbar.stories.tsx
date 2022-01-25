import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Navbar as NavbarComponent } from '../components/Navbar';

export default {
  title: 'Layout/Navbar',
  component: NavbarComponent,
} as ComponentMeta<typeof NavbarComponent>;

// // const Template: ComponentStory<typeof Navbar> = (args) => <Navbar />;

export const Navbar: ComponentStory<typeof NavbarComponent> = (args: any) => {
  return <NavbarComponent {...args} />;
};

// export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   user: {},
// };

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};

// import { Story, Meta } from '@storybook/react';
// import { Navbar as NavbarComponent } from '../components/Navbar';
