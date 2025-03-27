"use client";

import { JSX, useState } from "react";
import { motion } from "framer-motion";
import { Container, TabBar, TabButton, TabContent } from "@/styles/page.styles";

import Visualizer from "@/components/Visualizer";
import Calculator from "@/components/Calculator";
import Insights from "@/components/Insights";

interface TabInfo {
    id: string;
    label: string;
    component: JSX.Element;
}

export default function Home() {
    const [activeTab, setActiveTab] = useState<string>("visualizer");

    const tabs: TabInfo[] = [
        { id: "visualizer", label: "Visualizer", component: <Visualizer /> },
        { id: "calculator", label: "Calculator", component: <Calculator /> },
        { id: "insights", label: "Insights", component: <Insights /> },
    ];

    return (
        <Container>
            <TabBar>
                {tabs.map((tab) => (
                    <TabButton
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        isActive={activeTab === tab.id}
                    >
                        {activeTab === tab.id && (
                            <motion.div
                                layoutId="activeTabIndicator"
                                className="indicator"
                                initial={false}
                                transition={{ duration: 0.2 }}
                            />
                        )}
                        {tab.label}
                    </TabButton>
                ))}
            </TabBar>

            <TabContent>
                {tabs.find((tab) => tab.id === activeTab)?.component}
            </TabContent>
        </Container>
    );
}
