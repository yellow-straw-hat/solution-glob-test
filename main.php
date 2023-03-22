function foo($intervals) {
    $merged = array();
    $count = count($intervals);
    if ($count == 0) {
        return $merged;
    }
    // Tri des intervalles selon leur borne inférieure
    usort($intervals, function($a, $b) {
        return $a[0] - $b[0];
    });
    // Fusion des intervalles
    $start = $intervals[0][0];
    $end = $intervals[0][1];
    for ($i = 1; $i < $count; $i++) {
        $interval = $intervals[$i];
        if ($interval[0] <= $end) {
            // Les intervalles se chevauchent, on les fusionne
            $end = max($end, $interval[1]);
        } else {
            // Les intervalles ne se chevauchent pas, on enregistre l'intervalle fusionné précédent
            $merged[] = array($start, $end);
            $start = $interval[0];
            $end = $interval[1];
        }
    }
    $merged[] = array($start, $end);
    return $merged;
}

// Appeler la fonction avec des tableaux d'intervalles comme ceci:
$intervals = array(
    array(0, 3),
    array(6, 10)
);
$result = foo($intervals);
print_r($result);
