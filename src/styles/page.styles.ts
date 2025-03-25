import styled from "@emotion/styled";
import { Colors } from "@/styles/colors";

interface TabButtonProps {
    isActive: boolean;
}

export const Container = styled.div`
    margin: 20px;
`;

export const TabBar = styled.div`
    display: flex;
    border-bottom: 1px solid ${Colors.border};
`;

export const TabButton = styled.button<TabButtonProps>`
    position: relative;
    padding: 10px 20px;
    border: none;
    background: none;
    cursor: pointer;
    color: ${(props) =>
        props.isActive ? Colors.primary : Colors.textSecondary};

    .indicator {
        position: absolute;
        bottom: -1px;
        left: 0;
        right: 0;
        height: 2px;
        background-color: ${Colors.primary};
    }
`;

export const TabContent = styled.div`
    padding: 20px 0;
`;
