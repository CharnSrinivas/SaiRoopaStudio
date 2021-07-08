import React, { createRef, useRef, useState, useEffect } from "react";
import "./Tabview.css";
export default function Tabview({
    tabHeadNamesArray,
    tabOnclickEventsArray,
    sliderColor,
    initialActiveTabIndex,
    activeTabHeadTextColor,
    inactiveTabHeadTextColor,
}) {
    useEffect(() => {
        sliderRef.current.style.width =
            ((100 / tabHeadNamesArray.length)/2).toString() + "%";
        initialActiveTabIndex
            ? changeTabPosition(initialActiveTabIndex)
            : changeTabPosition(0);
    }, []);

    // ?--------------               Vlidating props

    initialActiveTabIndex = initialActiveTabIndex ? initialActiveTabIndex : 0;
    sliderColor = sliderColor ? sliderColor : "blue";
    activeTabHeadTextColor = activeTabHeadTextColor ? activeTabHeadTextColor : "#000";
    inactiveTabHeadTextColor = inactiveTabHeadTextColor
        ? inactiveTabHeadTextColor
        : "gray";

    const [activeTab, setActiveTab] = useState(initialActiveTabIndex);
    const sliderRef = useRef();
    const sliderWrapperRef = useRef();
    const tabBarItemsRef = useRef([]);

    //Todo:  Fill tabbaritemsref array with creactRef
    if (tabBarItemsRef.current.length !== tabHeadNamesArray.length) {
        tabBarItemsRef.current = tabHeadNamesArray.map(
            (_, i) => tabBarItemsRef.current[i] || createRef()
        );
    }

    const changeTabPosition = (index) => {
        if (index !== activeTab) {
            let sliderWrapperWidth =sliderWrapperRef.current.getBoundingClientRect().width;
            let tabItemWidth = tabBarItemsRef.current[index].current.getBoundingClientRect().width;
            let sliderWidth = sliderRef.current.getBoundingClientRect().width;
            let leftPercentage =
                (((index * tabItemWidth+sliderWidth/2) / sliderWrapperWidth) * 100).toString() + "%";
            sliderRef.current.style.left = leftPercentage;
            setActiveTab(index);
        }
    };

    return (
        <div className="tab-container">
            <div className="tab-bar">
                <div className="tab-bar-items">
                    {tabHeadNamesArray.map((tabName, index) => {
                        let id = "tab-bar-item-" + index;
                        return (
                            <div
                                key={index}
                                className={
                                    index === activeTab
                                        ? "tab-bar-item active-tab"
                                        : "tab-bar-item"
                                }
                                data-index={index}
                                style={{
                                    "--active-tab-color": activeTabHeadTextColor,
                                    "--inactive-tab-color": inactiveTabHeadTextColor,
                                }}
                                id={id}
                                ref={tabBarItemsRef.current[index]}
                                onClick={() => changeTabPosition(index)}
                            >
                                {tabName}
                            </div>
                        );
                    })}
                </div>
                <div className="tab-slider-wrapper" ref={sliderWrapperRef}>
                    <div
                        id="slider"
                        style={{
                            backgroundColor: sliderColor,
                        }}
                        ref={sliderRef}
                    ></div>
                </div>
            </div>
        </div>
    );
}
