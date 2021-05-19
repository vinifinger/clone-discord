import React from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage'; 

const ChannelData: React.FC = () => {
    return ( 
        <Container>
            <Messages>
                {Array.from(Array(15).keys()).map( (n) => (
                    <ChannelMessage 
                        author="Vinicius Finger"
                        date="05/01/2022"
                        content={
                            <>
                                <Mention>@Robô</Mention>, esse é o meu clone do Discord! 
                            </>
                    }
                    />
                ))}
                <ChannelMessage 
                    author="Robô"
                    date="05/01/2022"
                    content={
                        <>
                            <Mention>@vinifinger</Mention> Aos poucos tudo é possível.
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;