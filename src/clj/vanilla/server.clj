(ns vanilla.server
    (:require [dashboard-clj.core :as dash]
              [environ.core :refer [env]]
              [vanilla.fetcher])
    (:gen-class))

(def datasources [{:name     :spectrum-traces
                   :read-fn  :vanilla.fetcher/fetch
                   :schedule {:in    [0 :seconds]
                              :every [2 :seconds]}}

                  {:name     :current-time
                   :read-fn  :vanilla.fetcher/current-time
                   :params   []
                   :schedule {:in    [0 :seconds]
                              :every [5 :seconds]}}

                  {:name     :entity-traces-1
                   :read-fn  :vanilla.fetcher/entity-1
                   :schedule {:in    [0 :seconds]
                              :every [7 :seconds]}}

                  {:name     :entity-traces-2
                   :read-fn  :vanilla.fetcher/entity-2
                   :schedule {:in    [0 :seconds]
                              :every [9 :seconds]}}])

(defn start-dashboard[]
  (prn "server starting")
  (dash/start datasources {:port (Integer. (or (env :port) 5000))}))

(defn -main [& [port]]
  (start-dashboard))
