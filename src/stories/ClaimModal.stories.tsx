import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ClaimModal } from '../components/ClaimModal';

export default {
  title: 'Modals/Claim',
  component: ClaimModal,
  argTypes: {},
} as ComponentMeta<typeof ClaimModal>;

const Template: ComponentStory<typeof ClaimModal> = (args: any) => {
  return <ClaimModal {...args} />;
};

export const SingleClaim = Template.bind({});
SingleClaim.args = { numClaims: 1, isOpen: true };

export const MultipleClaims = Template.bind({});
MultipleClaims.args = { numClaims: 2, isOpen: true };

export const NoClaims = Template.bind({});
NoClaims.args = { numClaims: 0, isOpen: true };
