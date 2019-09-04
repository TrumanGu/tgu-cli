#!/usr/bin/env node

import * as inquirer from  'inquirer'
import * as chalk from  'chalk'
import * as fs from  'fs'
const tplObj = require(`../template`)

let question = [
  {
    name: "name",
    message: "请输入要删除的模板名称",
    validate (val) {
      if (val === '') {
        return 'Name is required!'
      } else if (!tplObj[val]) {
        return 'Template does not exist!'
      } else  {
        return true
      }
    }
  }
]

inquirer
  .prompt(question).then(answers => {
    // answers 就是用户输入的内容
    let { name } = answers;
    delete tplObj[name]
    // 更新 template.json 文件
    fs.writeFile(`${__dirname}/../template.json`, JSON.stringify(tplObj), 'utf-8', err => {
      if (err) console.log(err)
      console.log('\n')
      console.log(chalk.green('Deleted successfully!\n'))
      console.log(chalk.grey('The latest template list is: \n'))
      console.log(tplObj)
      console.log('\n')
    })
  })