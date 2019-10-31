(ns vanilla.db)


(defn spectrum-data []
  [{:name "trace-1"
    :values (into []
                  (take 200
                        (repeatedly #(+ 5.0
                                        (rand 5)))))}
   {:name "trace-2"
    :values (into []
                  (take 200
                        (repeatedly #(+ 5.0
                                        (rand 5)))))}
   {:name "trace-3"
    :values (into []
                  (take 200
                        (repeatedly #(+ 5.0
                                        (rand 5)))))}])

(defn entity-data-1 []
      [{:name "entity-1"
        :values (into []
                      (take 200
                            (repeatedly #(+ 5.0
                                            (rand 5)))))}
       {:name "entity-2"
        :values (into []
                      (take 200
                            (repeatedly #(+ 5.0
                                            (rand 5)))))}
       {:name "entity-3"
        :values (into []
                      (take 200
                            (repeatedly #(+ 5.0
                                            (rand 5)))))}])

(defn entity-data-2 []
      [{:name "entity-1"
        :values (into []
                      (take 200
                            (repeatedly #(+ 5.0
                                            (rand 5)))))}
       {:name "entity-2"
        :values (into []
                      (take 200
                            (repeatedly #(+ 5.0
                                            (rand 5)))))}
       {:name "entity-3"
        :values (into []
                      (take 200
                            (repeatedly #(+ 5.0
                                            (rand 5)))))}])