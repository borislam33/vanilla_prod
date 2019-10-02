(ns vanilla.fetcher
  (:require [vanilla.db :as db]))

(defn fetch []
  (prn "Spectrum Traces")

  {:title "Spectrum Traces"
   :spectrum-data (db/spectrum-data)})

(defn current-time []
  (prn  "current-time service")

  {:title "Time"
   :text  (.format (java.time.LocalDateTime/now)
                   (java.time.format.DateTimeFormatter/ofPattern "hh:mm:ss"))})

(defn entity-1 []
      (prn "Entity Traces 1")

      {:title "Entity Traces 1"
       :entity-data (db/entity-data-1)})

(defn entity-2 []
      (prn "Entity Traces 2")

      {:title "Entity Traces 2"
       :entity-data (db/entity-data-2)})