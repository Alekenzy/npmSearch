import React from 'react';
import cl from "./RightWidget.module.css";

const RightWidget = () => {
  return (
    <div className={cl.RightWidget}>
        <div className={cl.RightWidgetContainer}>
            <div className={cl.RightWidgetCard}>
                <div className={cl.RightWidgetCardTitle}>
                    Search here
                </div>
                <div className={cl.RightWidgetCardDescription}>
                    In this website you can search for any npm packages you want. Just type in the searching place your necessary npm package and get what you want!
                </div>
            </div>
            <div className={cl.RightWidgetCard}>
                <div className={cl.RightWidgetCardTitle}>
                    About back-end
                </div>
                <div className={cl.RightWidgetCardDescription}>
                    May be you wondering, from where are these whole packages gets?! 
                    Of course, that is the <code>npm registry packages</code>, 
                    which are json APIs from <a href='https://registry.npmjs.org'>registry.npmjs.org</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightWidget