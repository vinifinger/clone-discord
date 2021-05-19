import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({
    nickname,
    isBot
}) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''}/>

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    )
}

const UserList: React.FC = () => {
    return ( 
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname="Vinicius Finger" />

            <Role>Offline - 20</Role>
            <UserRow nickname="Robô" isBot />
            <UserRow nickname="UserName" />
            <UserRow nickname="UserName" />
            <UserRow nickname="UserName" />
            <UserRow nickname="UserName" />
            <UserRow nickname="UserName" />
            <UserRow nickname="UserName" />
            <UserRow nickname="UserName" />
            <UserRow nickname="UserName" />
            <UserRow nickname="UserName" />
            <UserRow nickname="UserName" />
            <UserRow nickname="UserName" />
            <UserRow nickname="UserName" />
            <UserRow nickname="UserName" />
            <UserRow nickname="UserName" />
            <UserRow nickname="UserName" />
            <UserRow nickname="UserName" />
            <UserRow nickname="UserName" />
            <UserRow nickname="UserName" />
            <UserRow nickname="UserName" />
            <UserRow nickname="UserName" />
        </Container>
    )
};

export default UserList;