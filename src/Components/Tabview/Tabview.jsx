import React, { createRef, useRef, useState, useEffect } from "react";
import "./Tabview.css";


export default class Tabview extends React.Component {
    constructor(props) {
        super(props)
        this.tabHeadNamesArray = props.tabHeadNamesArray;
        this.tabOnclickEventsArray = props.tabOnclickEventsArray;
        this.sliderColor = props.sliderColor;
        this.initialActiveTabIndex = props.initialActiveTabIndex;
        this.activeTabHeadTextColor = props.activeTabHeadTextColor;
        this.inactiveTabHeadTextColor = props.inactiveTabHeadTextColor;
        this.sliderRef = createRef();
        this.sliderWrapperRef = createRef();
        this.tabBarItemsRef = [];
        this.state = {
            activeTab: this.initialActiveTabIndex,
            tabsToRender: [this.initialActiveTabIndex]
        }
    }
    componentDidMount() {
        this.sliderRef.current.style.width = ((100 / this.tabHeadNamesArray.length) / 2).toString() + "%";
        this.sliderRef.current.style.left = this.getLeftPercentageOfSlider(this.state.activeTab)
    }
    addRefToTabItemsRef = (ref) => {
        this.tabBarItemsRef.push(ref)

    }
    getLeftPercentageOfSlider(indexOfTabItem) {
        let sliderWrapperWidth = this.sliderWrapperRef.current.getBoundingClientRect().width;
        let tabItemWidth = this.tabBarItemsRef[indexOfTabItem].getBoundingClientRect().width;
        let sliderWidth = this.sliderRef.current.getBoundingClientRect().width;
        let leftPercentage = (((indexOfTabItem * tabItemWidth + sliderWidth / 2) / sliderWrapperWidth) * 100).toString() + "%";
        return leftPercentage
        
    }
    changeTabPosition(index) {
        if (index !== this.state.activeTab) {
            let leftPercentage =this.getLeftPercentageOfSlider(index);
            this.sliderRef.current.style.left = leftPercentage;
            this.setState({ activeTab: index })
        }

    };
    render() {
        return (
            <div className="tab-container">
                <div className="tab-bar">
                    <div className="tab-bar-items">
                        {this.tabHeadNamesArray.map((tabName, index) => {
                            let id = "tab-bar-item-" + index;
                            return (
                                <div
                                    key={index}
                                    className={index === this.state.activeTab ? "tab-bar-item active-tab" : "tab-bar-item"}
                                    data-index={index}
                                    style={{ "--active-tab-color": this.activeTabHeadTextColor, "--inactive-tab-color": this.inactiveTabHeadTextColor, }}
                                    id={id}
                                    ref={this.addRefToTabItemsRef}
                                    onClick={
                                        () => {
                                            this.changeTabPosition(index)
                                        }
                                    }
                                >
                                    {tabName}
                                </div>
                            );
                        })}
                    </div>
                    <div className="tab-slider-wrapper" ref={this.sliderWrapperRef}>
                        <div
                            id="slider"
                            style={{
                                backgroundColor: this.sliderColor,
                            }}
                            ref={this.sliderRef}
                        ></div>
                    </div>
                </div>
            </div>
        );
    }


}