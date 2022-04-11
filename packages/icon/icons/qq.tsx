
/*
* Tencent is pleased to support the open source community by making
* 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) available.
*
* Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
*
* 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) is licensed under the MIT License.
*
* License for 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition):
*
* ---------------------------------------------------
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
* documentation files (the "Software"), to deal in the Software without restriction, including without limitation
* the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
* to permit persons to whom the Software is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of
* the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
* THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
* CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
* IN THE SOFTWARE.
*/
import { FunctionalComponent } from 'vue';
import BkIcon, { IIconBaseProps } from './icon';
const data = JSON.parse('{"type":"element","name":"svg","attributes":{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 1024 1117.090909090909","style":"width: 1em; height: 1em; vertical-align: middle;fill: currentColor;overflow: hidden;"},"elements":[{"type":"element","name":"path","attributes":{"d":"M314.1818181818182 1117.090909090909h-30.720000000000002c-58.78690909090909-0.6516363636363637-112.73309090909092-21.038545454545456-155.5549090909091-54.87709090909091-18.01309090909091-17.31490909090909-29.55636363636364-42.216727272727276-29.55636363636364-69.86472727272727 0-1.3032727272727274 0.04654545454545455-2.6530909090909094 0.0930909090909091-3.956363636363637 0.1861818181818182-11.776 3.025454545454546-23.04 7.866181818181819-33.09381818181818-0.1861818181818182 0.32581818181818184-0.1861818181818182 0.1861818181818182-0.1861818181818182 0 0-18.478545454545458 7.168-35.281454545454544 18.897454545454547-47.75563636363636 8.424727272727273-10.100363636363637 18.10618181818182-18.897454545454547 28.811636363636364-26.205090909090906-7.866181818181819-12.008727272727274-16.19781818181818-25.506909090909094-23.691636363636366-39.47054545454545-17.268363636363638 19.78181818181818-42.123636363636365 34.443636363636365-70.42327272727273 37.05018181818182-19.642181818181818-1.349818181818182-35.70036363636364-13.870545454545454-42.170181818181824-31.045818181818184-51.75854545454546-139.96218181818182 26.43781818181818-264.9367272727273 87.17963636363636-336.1512727272728-0.32581818181818184-3.2581818181818187-0.512-7.028363636363636-0.512-10.798545454545456s0.1861818181818182-7.586909090909091 0.5585454545454546-11.310545454545455c-0.3723636363636364-2.699636363636364-0.5585454545454546-6.3767272727272735-0.5585454545454546-10.053818181818182 0-18.990545454545455 5.12-36.77090909090909 14.056727272727272-52.08436363636364 0.4189090909090909-23.505454545454548 10.705454545454547-44.96290909090909 26.903272727272725-60.22981818181819 2.0014545454545454-203.264 167.2378181818182-367.29018181818185 370.78109090909095-367.29018181818185 0.512 0 0.9774545454545456 0 1.4894545454545456 0 104.40145454545454 1.2567272727272727 198.42327272727272 44.86981818181818 265.8210909090909 114.40872727272729 65.34981818181818 65.25672727272728 106.82181818181819 154.25163636363638 110.40581818181818 252.88145454545455 22.43490909090909 28.904727272727275 36.02618181818182 65.1170909090909 36.02618181818182 104.44800000000001 0 12.706909090909091-1.3963636363636363 25.088-4.096 37.00363636363637 51.2 64.512 134.28363636363636 203.45018181818185 70.05090909090909 343.7847272727273-7.493818181818182 17.268363636363638-24.34327272727273 29.184-43.985454545454544 29.323636363636364h0c-27.694545454545455-4.654545454545455-50.87418181818182-20.945454545454545-64.69818181818181-43.566545454545455-8.424727272727273 15.63927272727273-16.57018181818182 29.137454545454545-25.46036363636364 42.030545454545454 14.382545454545454 6.935272727272727 25.925818181818183 16.942545454545453 35.51418181818182 28.57890909090909 11.450181818181818 11.86909090909091 18.71127272727273 27.46181818181818 19.735272727272726 44.73018181818182 4.654545454545455 9.774545454545455 7.493818181818182 21.038545454545456 7.680000000000001 32.954181818181816 0.04654545454545455 1.2101818181818182 0.0930909090909091 2.5134545454545454 0.0930909090909091 3.816727272727273 0 27.601454545454544-11.543272727272727 52.54981818181818-30.06836363636364 70.23709090909091-42.30981818181819 33.466181818181816-96.256 53.85309090909091-154.90327272727274 54.50472727272727-10.14690909090909 1.2101818181818182-21.736727272727276 1.8618181818181818-33.512727272727275 1.8618181818181818-66.28072727272728 0-127.44145454545455-21.643636363636364-176.91927272727273-58.32145454545454l-33.419636363636364 0.5585454545454546c-47.19709090909091 36.25890909090909-107.14763636363637 58.088727272727276-172.17163636363637 58.088727272727276-3.3047272727272725 0-6.56290909090909-0.04654545454545455-9.821090909090909-0.1861818181818182zM187.11272727272726 946.7345454545455l18.152727272727272 11.17090909090909-38.4 30.720000000000002c0.8378181818181818 8.238545454545454 3.8632727272727276 15.63927272727273 8.471272727272726 21.736727272727276 31.232000000000003 22.900363636363636 70.51636363636364 36.72436363636364 113.01236363636363 36.910545454545456 9.588363636363637 1.442909090909091 20.57309090909091 2.280727272727273 31.744000000000003 2.280727272727273 53.061818181818175 0 101.74836363636364-18.80436363636364 139.72945454545453-50.0829090909091l10.100363636363637-9.495272727272727h21.643636363636364c6.469818181818183 0.46545454545454545 14.010181818181819 0.7447272727272728 21.643636363636364 0.7447272727272728s15.173818181818183-0.2792727272727273 22.667636363636365-0.7912727272727273l14.336 0.04654545454545455 11.17090909090909 10.472727272727273c37.376000000000005 31.09236363636364 85.9229090909091 49.98981818181819 138.8450909090909 49.98981818181819 11.636363636363637 0 23.04-0.9309090909090909 34.16436363636364-2.6530909090909094-0.6516363636363637 0.1861818181818182 0 0.1861818181818182 0.6516363636363637 0.1861818181818182 42.07709090909091 0 80.94254545454547-13.637818181818181 112.45381818181818-36.67781818181818 3.6770909090909094-4.561454545454546 6.2370909090909095-11.031272727272727 6.2370909090909095-18.10618181818182 0-1.8618181818181818-0.1861818181818182-3.6770909090909094-0.512-5.445818181818182l-38.35345454545455-30.533818181818184 18.152727272727272-9.774545454545455c-10.053818181818182-7.633454545454546-21.969454545454546-13.451636363636363-34.955636363636366-16.61672727272727l-55.80800000000001-14.103272727272728 37.70181818181818-42.58909090909091c29.649454545454546-33.18690909090909 52.1309090909091-73.49527272727273 64.41890909090908-117.99272727272728l24.948363636363638-94.25454545454545 40.49454545454545 85.87636363636364c8.843636363636364 19.456 19.316363636363636 36.21236363636364 31.744000000000003 51.386181818181825 30.39418181818182-108.63709090909092-47.104-218.25163636363638-83.40945454545455-262.2370909090909l-13.265454545454544-15.360000000000001 6.9818181818181815-18.85090909090909c3.1185454545454547-9.076363636363636 4.887272727272728-19.54909090909091 4.887272727272728-30.440727272727276 0-25.134545454545457-9.541818181818181-48.034909090909096-25.227636363636368-65.25672727272728l-9.681454545454546-10.379636363636363v-13.963636363636363c-0.32581818181818184-169.70472727272727-135.40072727272727-307.75854545454547-303.9418181818182-312.78545454545457-1.349818181818182 0-2.373818181818182-0.04654545454545455-3.444363636363636-0.04654545454545455-167.7498181818182 0-303.70909090909095 135.95927272727272-303.70909090909095 303.70909090909095 0 3.6770909090909094 0.04654545454545455 7.354181818181819 0.1861818181818182 11.031272727272727l0 20.433454545454545-17.454545454545453 13.963636363636363c-5.678545454545454 3.1650909090909094-9.448727272727274 9.076363636363636-9.448727272727274 15.918545454545455 0 1.3032727272727274 0.13963636363636364 2.5134545454545454 0.3723636363636364 3.7236363636363636l4.189090909090909 27.089454545454544-16.756363636363638 7.680000000000001c-0.3723636363636364 2.7461818181818183-0.6050909090909091 5.864727272727273-0.6050909090909091 9.076363636363636s0.23272727272727273 6.330181818181819 0.6516363636363637 9.448727272727274c0.512 6.842181818181818 2.280727272727273 13.451636363636363 4.980363636363636 19.54909090909091l8.238545454545454 19.874909090909092-14.661818181818182 16.05818181818182c-59.485090909090914 55.482181818181814-96.53527272727273 134.28363636363636-96.53527272727273 221.7890909090909 0 10.891636363636364 0.5585454545454546 21.69018181818182 1.722181818181818 32.30254545454545 12.288-14.754909090909091 23.179636363636366-29.88218181818182 32.11636363636364-46.21963636363636l41.099636363636364-70.98181818181818 23.73818181818182 78.89454545454547c13.312 44.12509090909091 35.14181818181818 82.19927272727273 63.76727272727273 114.0829090909091l36.07272727272728 40.215272727272726-52.36363636363637 16.05818181818182c-12.427636363636365 2.3272727272727276-23.458909090909092 6.935272727272727-33.14036363636364 13.451636363636363zM165.4690909090909 474.76363636363635v0z"}}]}');
const qq: FunctionalComponent<IIconBaseProps> = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <BkIcon {...p}  data={data} name="qq"></BkIcon>;
};

qq.displayName = 'qq';
qq.inheritAttrs = false;

export default qq;
