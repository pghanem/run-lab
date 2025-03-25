"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container, TabBar, TabButton, TabContent } from "./page.styles";

interface TabInfo {
    id: string;
    label: string;
}

export default function Home() {
    const [activeTab, setActiveTab] = useState<string>("visualizer");

    const tabs: TabInfo[] = [
        { id: "visualizer", label: "Visualizer" },
        { id: "calculator", label: "Calculator" },
        { id: "insights", label: "Insights" },
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
                                transition={{ duration: 0.3 }}
                            />
                        )}
                        {tab.label}
                    </TabButton>
                ))}
            </TabBar>

            <TabContent>{activeTab}</TabContent>
        </Container>
    );
}
