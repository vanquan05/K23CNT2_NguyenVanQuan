// src/components/NhsMemberList.js
import React from "react";

const NvqMemberList = ({ members }) => {
    return (
        <div>
            <h2>Danh sách thành viên</h2>
            <ul>
                {members.map((member) => (
                    <li key={member.id}>
                        {member.fullname} - {member.username}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NvqMemberList;