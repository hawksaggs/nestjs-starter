import {Body, Controller, Delete, Get, Header, HttpCode, Param, Post, Put, Req, Res} from '@nestjs/common';
import {Request, Response} from "express";
import {Observable, of} from "rxjs";
import {CreateCatDto} from "./dto/create-cat.dto";
import {UpdateCatDto} from "./dto/update-cat.dto";
import {CatsService} from "./cats.service";
import {Cat} from "./interfaces/cat.interface";

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}
    @Post()
    // @HttpCode(201)
    // @Header('Cache-Control', 'none')
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);

    }

    /**
     * passthrough is used if you want to use both ie nestjs and expressjs response object
     * and want to modify it
     * @param response
     */
    @Get()
    findAll(@Req() request: Request, @Res({passthrough: true}) response: Response): Cat[] {
        return this.catsService.findAll();
    }

    @Get(':id')
    // findOne(@Param() params): string {
    findOne(@Param('id') id: string): string {
        // return `This action returns a #${params.id} cat`;
        return `This action returns a #${id} cat`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `This action update a #${id} cat`;
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return `This action remove a #${id} cat`;
    }

    // @Get()
    // findAll(): Promise<any[]> {
    //     return [];
    // }

    // @Get()
    // findAll(): Observable<any[]> {
    //     return of([]);
    // }
}
