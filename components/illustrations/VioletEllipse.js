import { motion } from 'framer-motion';
import styled from 'styled-components';

const draw = {
 hidden: { pathLength: 0, opacity: 0 },
 visible: (i) => {
  const delay = i * 0.4;
  return {
   pathLength: 1,
   opacity: 1,
   transition: {
    pathLength: {type: "tween", delay, duration: 1},
   },
  };
 },
};

const SVG = styled(motion.svg)`
  position: relative;
  top: 65px;
  left: 140px;
  z-index: -10;

  @media only screen and (max-width: 600px) {
    position: absolute;
    top: 60vh;
    left: 50px;
    width: 250px;
    height: 250px;
  }  
`

const MASK = styled(motion.mask)`
  mask-type: alpha; 
`



export default function VioletEllipse() {
 return (
  <SVG
   width='300'
   height='300'
   viewBox='500 340 1000 1000'
   fill='none'
   initial='hidden'
   animate='visible'
  >
   <MASK
    id='mask0_20_61'
    maskUnits='userSpaceOnUse'
    x='-221'
    y='-2'
    width='2636'
    height='2636'
   >
    <motion.path
     d='M378.14 1940.7C546.08 1772.76 589.92 1816.6 757.86 1648.7C925.8 1480.8 881.97 1436.87 1049.91 1268.93C1217.85 1100.99 1261.7 1144.83 1429.65 976.93C1597.6 809.03 1553.75 765.14 1721.7 597.2'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={0}
    />
    <motion.path
     d='M359.49 1922.04C527.42 1754.1 571.26 1797.93 739.2 1630C907.14 1462.07 863.31 1418.21 1031.2 1250.26C1199.09 1082.31 1242.99 1126.16 1410.94 958.26C1578.89 790.36 1535.04 746.47 1702.94 578.53'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={0.1}
    />
    <motion.path
     d='M338.33 1900.93C506.27 1732.93 550.11 1776.79 718.05 1608.85C885.99 1440.91 842.16 1397.06 1010.1 1229.11C1178.04 1061.16 1221.89 1105.01 1389.84 937.11C1557.79 769.21 1513.94 725.28 1681.89 557.33'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={0.2}
    />
    <motion.path
     d='M314.69 1877.26C482.63 1709.31 526.49 1753.15 694.42 1585.21C862.35 1417.27 818.49 1373.42 986.49 1205.48C1154.49 1037.54 1198.28 1081.37 1366.22 913.48C1534.16 745.59 1490.33 701.69 1658.22 533.74'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round'variants={draw} custom={0.3}
    />
    <motion.path
     d='M288.57 1851.13C456.49 1683.19 500.35 1727.03 668.29 1559.09C836.23 1391.15 792.4 1347.3 960.34 1179.35C1128.28 1011.4 1172.13 1055.25 1340.08 887.35C1508.03 719.45 1464.18 675.56 1632.13 507.62'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={0.4}
    />
    <motion.path
     d='M259.95 1822.52C427.95 1654.58 471.74 1698.42 639.68 1530.47C807.62 1362.52 763.78 1318.69 931.73 1150.74C1099.68 982.79 1143.49 1026.63 1311.49 858.69C1479.49 690.75 1435.57 646.93 1603.49 478.93'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={0.5}
    />
    <motion.path
     d='M228.85 1791.42C396.79 1623.42 440.64 1667.31 608.58 1499.42C776.52 1331.53 732.68 1287.64 900.63 1119.69C1068.58 951.74 1112.42 995.58 1280.36 827.69C1448.3 659.8 1404.49 615.8 1572.42 447.85'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={0.6}
    />
    <motion.path
     d='M195.26 1757.83C363.26 1589.88 407.05 1633.73 574.99 1465.83C742.93 1297.93 699.09 1254 867.04 1086.05C1034.99 918.1 1078.83 961.93 1246.77 794C1414.71 626.07 1370.88 582.21 1538.83 414.26'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={0.7}
    />
    <motion.path
     d='M159.19 1721.75C327.13 1553.81 370.97 1597.65 538.91 1429.75C706.85 1261.85 663.02 1217.93 830.96 1049.93C998.9 881.93 1042.75 925.87 1210.7 757.93C1378.65 589.99 1334.8 546.14 1502.7 378.2'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={0.8}
    />
    <motion.path
     d='M120.62 1683.19C288.56 1515.24 332.4 1559.08 500.35 1391.19C668.3 1223.3 624.49 1179.35 792.4 1011.41C960.31 843.47 1004.18 887.3 1172.13 719.41C1340.08 551.52 1296.24 507.57 1464.18 339.62'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={0.9}
    />
    <motion.path
     d='M79.5699 1642.13C247.49 1474.19 291.35 1518.03 459.29 1350.09C627.23 1182.15 583.4 1138.3 751.34 970.35C919.28 802.4 963.13 846.25 1131.08 678.35C1299.03 510.45 1255.18 466.57 1423.08 298.62'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={1}
    />
    <motion.path
     d='M36.0299 1598.59C203.97 1430.65 247.81 1474.49 415.75 1306.59C583.69 1138.69 539.86 1094.76 707.8 926.81C875.74 758.86 919.59 802.71 1087.54 634.81C1255.49 466.91 1211.64 422.93 1379.59 255.03'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={1.1}
    />
    <motion.path
     d='M-10 1552.56C157.94 1384.62 201.78 1428.46 369.72 1260.56C537.66 1092.66 493.83 1048.73 661.77 880.78C829.71 712.83 873.56 756.68 1041.49 588.73C1209.42 420.78 1165.61 376.93 1333.56 209'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={1.2}
    />
    <motion.path
     d='M-58.51 1504.04C109.43 1336.1 153.27 1379.94 321.21 1212.04C489.15 1044.14 445.31 1000.21 613.26 832.27C781.21 664.33 825.04 708.16 992.99 540.21C1160.94 372.26 1117.1 328.43 1284.99 160.48'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={1.3}
    />
    <motion.path
     d='M-109.51 1453.04C58.44 1285.1 102.28 1328.94 270.22 1161.04C438.16 993.14 394.3 949.21 562.25 781.26C730.2 613.31 774.04 657.15 941.98 489.21C1109.92 321.27 1066.09 277.42 1234.04 109.47'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={1.4}
    />
    <motion.path
     d='M-163.02 1399.54C4.91998 1231.6 48.76 1275.44 216.71 1107.54C384.66 939.64 340.81 895.75 508.71 727.81C676.61 559.87 720.54 603.66 888.49 435.71C1056.44 267.76 1012.6 223.93 1180.54 55.98'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={1.5}
    />
    <motion.path
     d='M-219 1343.56C-51.06 1175.62 -7.22 1219.46 160.72 1051.56C328.66 883.66 284.83 839.77 452.72 671.82C620.61 503.87 664.56 547.68 832.49 379.73C1000.42 211.78 956.61 167.93 1124.56 0'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={1.6}
    />
    <motion.path
     d='M396.8 1959.36C564.74 1791.42 608.58 1835.26 776.49 1667.32C944.4 1499.38 900.6 1455.53 1068.49 1287.58C1236.38 1119.63 1280.28 1163.48 1448.23 995.58C1616.18 827.68 1572.33 783.8 1740.23 615.85'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={1.7}
    />
    <motion.path
     d='M415.49 1978.02C583.4 1810.08 627.24 1853.93 795.18 1685.98C963.12 1518.03 919.29 1474.19 1087.24 1306.25C1255.19 1138.31 1299.02 1182.14 1466.97 1014.19C1634.92 846.24 1591.07 802.41 1758.97 634.46'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={1.8}
    />
    <motion.path
     d='M434.12 1996.68C602.06 1828.74 645.9 1872.58 813.84 1704.68C981.78 1536.78 937.95 1492.85 1105.9 1324.93C1273.85 1157.01 1317.68 1200.8 1485.63 1032.85C1653.58 864.9 1609.74 821.07 1777.68 653.12'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={1.9}
    />
    <motion.path
     d='M452.78 2015.34C620.72 1847.4 664.56 1891.24 832.49 1723.3C1000.42 1555.36 956.59 1511.51 1124.54 1343.57C1292.49 1175.63 1336.34 1219.46 1504.29 1051.51C1672.24 883.56 1628.4 839.73 1796.29 671.78'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={2}
    />
    <motion.path
     d='M471.49 2034C639.38 1866.06 683.22 1909.93 851.17 1741.93C1019.12 1573.93 975.27 1530.17 1143.22 1362.23C1311.17 1194.29 1355 1238.12 1522.95 1070.17C1690.9 902.22 1647.06 858.39 1814.95 690.44'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={2.1}
    />
    <motion.path
     d='M490.1 2052.67C658.04 1884.67 701.88 1928.56 869.83 1760.67C1037.78 1592.78 993.93 1548.83 1161.88 1380.93C1329.83 1213.03 1373.66 1256.82 1541.61 1088.93C1709.56 921.04 1665.72 877.14 1833.66 709.19'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={2.2}
    />
    <motion.path
     d='M508.76 2071.33C676.7 1903.38 720.54 1947.22 888.49 1779.28C1056.44 1611.34 1012.59 1567.49 1180.49 1399.55C1348.39 1231.61 1392.28 1275.44 1560.22 1107.55C1728.16 939.66 1684.33 895.76 1852.22 727.81'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={2.3}
    />
    <motion.path
     d='M527.42 2089.99C695.36 1922.04 739.2 1965.93 907.15 1797.93C1075.1 1629.93 1031.25 1586.14 1199.2 1418.2C1367.15 1250.26 1410.99 1294.09 1578.93 1126.2C1746.87 958.31 1703.04 914.41 1870.93 746.46'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={2.4}
    />
    <motion.path
     d='M546.08 2108.65C714.02 1940.65 757.87 1984.54 925.81 1816.6C1093.75 1648.66 1049.91 1604.82 1217.86 1436.87C1385.81 1268.92 1429.65 1312.76 1597.59 1144.87C1765.53 976.98 1721.7 933.03 1889.65 765.08'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={2.5}
    />
    <motion.path
     d='M564.74 2127.31C732.69 1959.36 776.49 2003.21 944.49 1835.26C1112.49 1667.31 1068.57 1623.48 1236.49 1455.53C1404.41 1287.58 1448.28 1331.42 1616.22 1163.53C1784.16 995.64 1740.33 951.74 1908.28 783.79'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={2.6}
    />
    <motion.path
     d='M583.4 2145.93C751.4 1977.99 795.19 2021.83 963.13 1853.93C1131.07 1686.03 1087.23 1642.15 1255.18 1474.2C1423.13 1306.25 1466.97 1350.09 1634.91 1182.2C1802.85 1014.31 1759.02 970.41 1926.97 802.46'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={2.7}
    />
    <motion.path
     d='M602.06 2164.63C770.06 1996.69 813.85 2040.53 981.79 1872.58C1149.73 1704.63 1105.9 1660.8 1273.84 1492.85C1441.78 1324.9 1485.63 1368.75 1653.57 1200.85C1821.51 1032.95 1777.68 989.06 1945.63 821.12'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={2.8}
    />
    <motion.path
     d='M620.72 2183.29C788.72 2015.35 832.51 2059.19 1000.45 1891.29C1168.39 1723.39 1124.56 1679.46 1292.49 1511.51C1460.42 1343.56 1504.28 1387.41 1672.23 1219.51C1840.18 1051.61 1796.33 1007.72 1964.23 839.78'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={2.9}
    />
    <motion.path
     d='M639.38 2201.93C807.38 2033.99 851.17 2077.83 1019.11 1909.93C1187.05 1742.03 1143.22 1698.14 1311.11 1530.19C1479 1362.24 1522.9 1406.09 1690.85 1238.19C1858.8 1070.29 1814.95 1026.4 1982.85 858.46'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={3}
    />
    <motion.path
     d='M658.05 2220.61C825.99 2052.67 869.83 2096.51 1037.77 1928.61C1205.71 1760.71 1161.88 1716.78 1329.82 1548.83C1497.76 1380.88 1541.61 1424.73 1709.56 1256.83C1877.51 1088.93 1833.66 1045.04 2001.56 877.1'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={3.1}
    />
    <motion.path
     d='M676.71 2239.27C844.65 2071.33 888.49 2115.17 1056.43 1947.27C1224.37 1779.37 1180.54 1735.44 1348.49 1567.49C1516.44 1399.54 1560.28 1443.39 1728.23 1275.49C1896.18 1107.59 1852.33 1063.7 2020.23 895.76'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={3.2}
    />
    <motion.path
     d='M695.37 2257.93C863.31 2089.99 907.15 2133.83 1075.09 1965.93C1243.03 1798.03 1199.2 1754.14 1367.09 1586.19C1534.98 1418.24 1578.88 1462.09 1746.83 1294.19C1914.78 1126.29 1870.93 1082.4 2038.83 914.46'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={3.3}
    />
    <motion.path
     d='M714.03 2276.59C881.97 2108.65 925.81 2152.49 1093.75 1984.59C1261.69 1816.69 1217.86 1772.8 1385.75 1604.85C1553.64 1436.9 1597.54 1480.75 1765.49 1312.85C1933.44 1144.95 1889.59 1101.07 2057.49 933.12'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={3.4}
    />
    <motion.path
     d='M732.69 2295.25C900.63 2127.31 944.47 2171.15 1112.41 2003.25C1280.35 1835.35 1236.49 1791.42 1404.49 1623.48C1572.49 1455.54 1616.27 1499.37 1784.22 1331.42C1952.17 1163.47 1908.32 1119.64 2076.22 951.69'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={3.5}
    />
    <motion.path
     d='M751.35 2313.93C919.29 2145.99 963.13 2189.83 1131.07 2021.93C1299.01 1854.03 1255.18 1810.08 1423.13 1642.14C1591.08 1474.2 1634.91 1518.03 1802.86 1350.08C1970.81 1182.13 1926.97 1138.3 2094.91 970.35'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={3.6}
    />
    <motion.path
     d='M770.01 2332.57C937.95 2164.63 981.79 2208.47 1149.74 2040.57C1317.69 1872.67 1273.84 1828.78 1441.74 1660.84C1609.64 1492.9 1653.57 1536.69 1821.49 1368.74C1989.41 1200.79 1945.6 1156.96 2113.49 989.01'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={3.7}
    />
    <motion.path
     d='M788.67 2351.23C956.61 2183.29 1000.45 2227.13 1168.4 2059.23C1336.35 1891.33 1292.49 1847.4 1460.49 1679.46C1628.49 1511.52 1672.27 1555.35 1840.22 1387.46C2008.17 1219.57 1964.33 1175.67 2132.22 1007.72'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={3.8}
    />
    <motion.path
     d='M807.33 2369.93C975.27 2201.93 1019.11 2245.82 1187.06 2077.93C1355.01 1910.04 1311.16 1866.14 1479.06 1698.2C1646.96 1530.26 1690.85 1574.09 1858.79 1406.15C2026.73 1238.21 1982.95 1194.28 2150.89 1026.33'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={3.9}
    />
    <motion.path
     d='M825.99 2388.56C993.93 2220.56 1037.77 2264.45 1205.72 2096.51C1373.67 1928.57 1329.82 1884.72 1497.72 1716.78C1665.62 1548.84 1709.51 1592.67 1877.45 1424.78C2045.39 1256.89 2001.56 1212.99 2169.45 1045.04'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={4}
    />
    <motion.path
     d='M844.65 2407.22C1012.59 2239.22 1056.43 2283.11 1224.38 2115.22C1392.33 1947.33 1348.49 1903.39 1516.43 1735.44C1684.37 1567.49 1728.22 1611.33 1896.16 1443.44C2064.1 1275.55 2020.27 1231.65 2188.16 1063.7'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={4.1}
    />
    <motion.path
     d='M863.31 2425.93C1031.25 2257.93 1075.1 2301.83 1243.04 2133.93C1410.98 1966.03 1367.14 1922.05 1535.09 1754.1C1703.04 1586.15 1746.88 1629.99 1914.82 1462.1C2082.76 1294.21 2038.93 1250.31 2206.88 1082.36'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={4.2}
    />
    <motion.path
     d='M881.97 2444.54C1049.97 2276.6 1093.76 2320.44 1261.7 2152.54C1429.64 1984.64 1385.8 1940.76 1553.7 1772.81C1721.6 1604.86 1765.54 1648.65 1933.49 1480.71C2101.44 1312.77 2057.59 1268.93 2225.54 1100.93'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={4.3}
    />
    <motion.path
     d='M900.63 2463.2C1068.63 2295.26 1112.42 2339.1 1280.36 2171.2C1448.3 2003.3 1404.46 1959.42 1572.36 1791.47C1740.26 1623.52 1784.15 1667.37 1952.09 1499.47C2120.03 1331.57 2076.2 1287.68 2244.15 1119.74'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={4.4}
    />
    <motion.path
     d='M919.29 2481.86C1087.29 2313.92 1131.08 2357.76 1299.02 2189.86C1466.96 2021.96 1423.13 1978.03 1591.07 1810.08C1759.01 1642.13 1802.86 1685.98 1970.81 1518.08C2138.76 1350.18 2094.91 1306.29 2262.81 1138.35'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={4.5}
    />
    <motion.path
     d='M937.95 2500.52C1105.95 2332.58 1149.74 2376.42 1317.68 2208.52C1485.62 2040.62 1441.79 1996.74 1609.68 1828.79C1777.57 1660.84 1821.49 1704.64 1989.49 1536.69C2157.49 1368.74 2113.57 1324.93 2281.49 1156.93'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={4.6}
    />
    <motion.path
     d='M956.62 2519.18C1124.56 2351.24 1168.4 2395.08 1336.34 2227.18C1504.28 2059.28 1460.49 2015.35 1628.39 1847.4C1796.29 1679.45 1840.18 1723.3 2008.13 1555.35C2176.08 1387.4 2132.23 1343.56 2300.13 1175.62'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={4.7}
    />
    <motion.path
     d='M975.28 2537.84C1143.22 2369.9 1187.06 2413.74 1355 2245.84C1522.94 2077.94 1479.11 2034.05 1647 1866.1C1814.89 1698.15 1858.79 1742 2026.74 1574.1C2194.69 1406.2 2150.84 1362.31 2318.74 1194.37'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={4.8}
    />
    <motion.path
     d='M993.94 2556.5C1161.88 2388.56 1205.72 2432.4 1373.66 2264.5C1541.6 2096.6 1497.77 2052.71 1665.71 1884.76C1833.65 1716.81 1877.49 1760.62 2045.49 1592.67C2213.49 1424.72 2169.55 1380.93 2337.49 1212.93'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={4.9}
    />
    <motion.path
     d='M1012.6 2575.16C1180.54 2407.22 1224.38 2451.06 1392.32 2283.16C1560.26 2115.26 1516.43 2071.37 1684.37 1903.42C1852.31 1735.47 1896.16 1779.32 2064.11 1611.37C2232.06 1443.42 2188.21 1399.59 2356.16 1231.64'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={5}
    />
    <motion.path
     d='M1031.26 2593.82C1199.2 2425.88 1243.04 2469.72 1410.98 2301.82C1578.92 2133.92 1535.09 2090.03 1703.04 1922.09C1870.99 1754.15 1914.82 1797.93 2082.77 1629.99C2250.72 1462.05 2206.87 1418.21 2374.77 1250.26'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={5.1}
    />
    <motion.path
     d='M1049.92 2612.48C1217.86 2444.54 1261.7 2488.38 1429.64 2320.48C1597.58 2152.58 1553.75 2108.69 1721.7 1940.75C1889.65 1772.81 1933.49 1816.6 2101.43 1648.65C2269.37 1480.7 2225.54 1436.87 2393.49 1268.93'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={5.2}
    />
    <motion.path
     d='M1068.58 2631.14C1236.52 2463.2 1280.36 2507.04 1448.3 2339.14C1616.24 2171.24 1572.41 2127.35 1740.36 1959.41C1908.31 1791.47 1952.14 1835.3 2120.09 1667.35C2288.04 1499.4 2244.2 1455.57 2412.14 1287.62'
     stroke='#8E8CED'
     strokeWidth='4'
     strokeLinecap='round'
     strokeLinejoin='round' variants={draw} custom={5.3}
    />
   </MASK>
   <motion.g mask='url(#mask0_20_61)'>
    <motion.circle cx='1012' cy='840' r='491' fill='#8E8CED' variants={draw} custom={1.4} />
   </motion.g>
  </SVG>
 );
}
