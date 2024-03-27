import React, { FC } from 'react';

interface UserCardProps {
    username: string;
}

export const UserCard: FC<UserCardProps> = ({ username }: UserCardProps) => {
    return (
        <div style={{ border: '2px solid green', padding: 20 }}>
            <div>username: {username ?? 'user'}</div>
            <div>password: qwerty12345</div>
        </div>
    );
};

export default UserCard;
