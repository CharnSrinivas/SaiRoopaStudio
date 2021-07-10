import React, { createRef } from "react";
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
        this.renderTabContentArray = props.renderTabContentArray;
        this.overFlowTabBar = props.overFlowTabBar;
        this.tabBarWidth = props.tabBarWidth;
        this.tabBarMobileViewWidth = props.tabBarMobileViewWidth;
        this.tabBarWrapperRef = createRef();
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
        this.sliderRef.current.style.left = this.getLeftPercentageOfSlider(this.state.activeTab).toString() + "%"; // Initialy sets slider to active tab position
    }
    addRefToTabItemsRef = (ref) => {
        this.tabBarItemsRef.push(ref)

    }
    getLeftPercentageOfSlider(indexOfTabItem) {
        let sliderWrapperWidth = this.sliderWrapperRef.current.getBoundingClientRect().width;
        let tabItemWidth = this.tabBarItemsRef[indexOfTabItem].getBoundingClientRect().width;
        let sliderWidth = this.sliderRef.current.getBoundingClientRect().width;
        let leftPercentage = (((indexOfTabItem * tabItemWidth + sliderWidth / 2) / sliderWrapperWidth) * 100);
        return leftPercentage

    }
    onTabClick(index) {
        this.changeTabPosition(index);
        if (!this.state.tabsToRender.includes(index)) this.setState({ tabsToRender: [...this.state.tabsToRender, index] })
    }
    changeTabPosition(index) {
        if (index !== this.state.activeTab) {
            let leftPercentage = this.getLeftPercentageOfSlider(index);
            this.sliderRef.current.style.left = leftPercentage.toString() + "%";;
            this.setState({ activeTab: index })
        }

    };
    TabBarSlider = () => {
        return (
            <div className="tab-slider-wrapper" ref={this.sliderWrapperRef}>
                <div
                    id="slider"
                    style={{
                        backgroundColor: this.sliderColor,
                    }}
                    ref={this.sliderRef}
                ></div>
            </div>
        )
    }
    TabBar = () => {
        let style = this.tabBarWidth ? { width: this.tabBarWidth } : { width: 'auto' }
        if (style && this.tabBarMobileViewWidth) style['--tab-bar-mobile-width'] = this.tabBarMobileViewWidth; // Adding a css variable to store '--tab-bar-mobile-width':

        return (
            <div className='tab-bar-wrapper' id={'tab-bar-wrapper'} ref={this.tabBarWrapperRef} data-overflowx={this.overFlowTabBar ? 'scroll' : 'hidden'}>
                <div className="tab-bar"
                    style={style}
                >
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
                                    onClick={() => { this.onTabClick(index) }
                                    }
                                >
                                    {tabName}
                                </div>
                            );
                        })}
                    </div>
                    <this.TabBarSlider />
                </div>
            </div>
        )
    }
    TabContent = () => {
        return (
            <div className='tab-content-wrapper'>
                {
                    this.state.tabsToRender.includes(this.state.activeTab) &&

                    this.renderTabContentArray[this.state.activeTab]
                }
            </div>
        )
    }
    render() {
        return (
            <div className="tab-container">
                <this.TabBar />
                <this.TabContent />
            </div>
        );
    }


}