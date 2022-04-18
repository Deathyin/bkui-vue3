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
import { exec } from 'child_process';
import { GlobalsOption } from 'rollup';
import { promisify } from 'util';

import packageJson from '../../../package.json';
import { ITaskItem } from '../typings/task';

import { WorkerPool } from './worker-pools';
export class CompileTask {
  globals: GlobalsOption;
  constructor(public taskItemList: ITaskItem[]) { }
  async getRollupGlobals() {
    const { stdout } = await promisify(exec)('yarn workspaces info --json');
    const globals: GlobalsOption = {};
    Object.keys(JSON.parse(stdout)).forEach((k) => {
      if (k === '@bkui-vue/icon') {
        globals[k] = `${k}/icons`;
      } else {
        globals[k] = k.replace(
          /^@bkui-vue\/(.+)$/,
          (_char, match) => match.replace(/^\S/, (s: string) => s.toUpperCase()),
        ).replace(/(-(\w))/, (_char, match, match2) => match2.toUpperCase());
      }
    });
    Object.keys({ ...packageJson.dependencies, ...packageJson.peerDependencies }).forEach((key) => {
      globals[key] = key;
    });
    this.globals = globals;
  }
  async start() {
    !this.globals && await this.getRollupGlobals();
    const workerPool = new WorkerPool(20);
    console.info(this.taskItemList.length, '========');
    this.taskItemList
      // .filter(item => item.type === 'script')
      // .slice(0, 10)
      .forEach((item, index) => {
        workerPool.runTask(item, this.globals, (err: Error) => {
          err && console.info(err);
          if (index >= this.taskItemList.length - 1) {
            workerPool.close();
          // console.timeEnd();
          }
        });
      });
  }
}
