import { Injectable } from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import * as puppeteer from 'puppeteer';
import { uniq } from 'lodash';
import { makeHttp, switchDomain } from '../../helpers/Strings';

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
      return Array.from(document.getElementsByTagName('a'), (a) => a.href);
    });

    await browser.close();

    const links = uniq(hrefs);

    return links.map((link) => {
      return makeHttp(switchDomain(link, 'front.docker.kiwitaxi.com:4002'));
    });
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
