import { Injectable } from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import * as puppeteer from 'puppeteer';
import { uniq } from 'lodash';

@Injectable()
export class LinksService {
  create(createLinkDto: CreateLinkDto) {
    return 'This action adds a new link';
  }

  async findAllLinkTags(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const hrefs = await page.evaluate(() => {
      return Array.from(document.getElementsByTagName('a'), a => a.href);
    });

    await browser.close();

    return uniq(hrefs);
  }

  findOne(id: number) {
    return `This action returns a #${id} link`;
  }

  update(id: number, updateLinkDto: UpdateLinkDto) {
    return `This action updates a #${id} link`;
  }

  remove(id: number) {
    return `This action removes a #${id} link`;
  }
}
