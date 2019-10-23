(ns vanilla.widgets.dual-chart
  (:require [reagent.core :as r]
            [reagent.ratom :refer-macros [reaction]]
            [dashboard-clj.widgets.core :as widget-common]
            [vanilla.widgets.basic-widget :as basic]
            [vanilla.widgets.util :as util]
            [vanilla.widgets.chart :as line]
            [vanilla.widgets.bar-chart :as bar]))



(widget-common/register-widget
  :dual-chart
  (fn [data options]
    [basic/basic-widget data options

     [:div {:style {:width "95%" :height "65%"}}
      [line/embed-line data options]

      [:div {:style {:width "95%" :height "65%"}}
       [bar/embed-bar data options (util/line->bar data options)]]]]))

