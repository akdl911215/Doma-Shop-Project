//
// Created by LEE Jung Hyun on 2021-08-21.
//

#include <stdio.h>
int main() {
    int i, sum = 0;
    for (int i = 1; i <= 10 ; i++) {
        if (i%2 && i%3) continue;
        sum += i;
    }
    printf("%d\n", sum);
    return 0;
}
