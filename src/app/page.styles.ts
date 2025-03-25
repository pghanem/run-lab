import styled from "@emotion/styled";

interface TabButtonProps {
    isActive: boolean;
}

export const Container = styled.div`
    margin: 20px;
`;

export const TabBar = styled.div`
    display: flex;
    border-bottom: 1px solid #ddd;
`;

export const TabButton = styled.button<TabButtonProps>`
    position: relative;
    padding: 10px 20px;
    border: none;
    background: none;
    cursor: pointer;
    color: ${(props) => (props.isActive ? "#4f46e5" : "#888")};
    font-weight: ${(props) => (props.isActive ? "bold" : "normal")};

    .indicator {
        position: absolute;
        bottom: -1px;
        left: 0;
        right: 0;
        height: 2px;
        background-color: #4f46e5;
    }
`;

export const TabContent = styled.div`
    padding: 20px 0;
`;
