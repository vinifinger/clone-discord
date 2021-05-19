import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';

import ChannelButton from '../ChannelButton';


const ChannelList: React.FC = () => {
    return ( 
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="chat-livre" />
            <ChannelButton channelName="trabalho" />
            <ChannelButton channelName="Lolzinho" />
            <ChannelButton channelName="Csgo" />
            <ChannelButton channelName="Valorant" />
        </Container>
    )
};

export default ChannelList;