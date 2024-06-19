class Solution {

    double maxVolume(double P, double A) {
        // code here
        float l = (float)(P - Math.sqrt(P * P - 24 * A)) / 12;
        float V = (float)(l * (A / 2.0 - l * (P / 4.0 - l)));
        return V;
    }
}