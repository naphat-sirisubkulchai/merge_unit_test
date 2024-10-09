export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const first_merge: number[] = [];
    let i = 0, j = 0


    while (i < collection_1.length && j < collection_2.length) {
        if (collection_1[i] <= collection_2[j]) {
            first_merge.push(collection_1[i]);
            i++;
        } else {
            first_merge.push(collection_2[j]);
            j++;
        }
    }

    while (i < collection_1.length) {
        first_merge.push(collection_1[i]);
        i++;
    }

    while (j < collection_2.length) {
        first_merge.push(collection_2[j]);
        j++;
    }

    const merged: number[] = [];
    let k = 0;
    let l = collection_3.length - 1; 

    while (k < first_merge.length && l >= 0) {
        if (first_merge[k] < collection_3[l]) {
            merged.push(first_merge[k]);
            k++;
        } else {
            merged.push(collection_3[l]);
            l--;
        }
    }


    while (k < first_merge.length) {
        merged.push(first_merge[k]);
        k++;
    }


    while (l >= 0) {
        merged.push(collection_3[l]);
        l--;
    }

    return merged;
}
