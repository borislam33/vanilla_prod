(ns vanilla.widgets.simple-text
    (:require [reagent.core :as r :refer [atom]]
              [dashboard-clj.widgets.core :as widget-common]))


(defn make-spectrum [data]
  [:div
   [:p (-> data :name)]
   [:p "count " (count (-> data :values))]])


(widget-common/register-widget
 :simple-text
 (fn [data options]
   (.log js/console ":simple-text" (str data) (str options))
   [:div
    [:div {:class "title-wrapper"}
     [:h3 {:class "title"
           :style {:background-color (:color options)}}
      (get-in data [:data :title])]]
    [:div (merge {:class "simple-text-widget"}
                 {:style (-> options :wrapper :style)})
     [:div (merge {:class "data"}
                  {:style (-> options :data :style)})
      [:p {:style {:fontSize "50px"
                   :font-weight "bold"
                   :color "blue"}}
       (get-in data [:data :text])]]]]))
