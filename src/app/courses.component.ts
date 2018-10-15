import { CoursesService } from './course/courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        {{text | summary:10}} <br/>
        {{ course.title | uppercase }} <br/> 
        {{ course.rating | number:'1.1-1'}} <br/>
        {{ course.students | number }} <br/>
        {{ course.price | currency:'INR'}} <br/>
        {{ course.releaseDate | date:'shortDate'}} <br/>
        <button class="btn btn-primary" (click)="onClick($event)" [class.active] = "isActive">Save</button>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
        <h2>{{ getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <img [src] = "imageUrl"/>
        <table>
            <tr>
                <td [attr.colspan] = "colspan"></td>
            </tr>
        </table>
    `
})
export class CoursesComponent{
    text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    email = "me@example.com";
    title = "List of Courses";
    colspan = 2
    isActive = true;
    imageUrl = "https://picsum.photos/400/300/?random"
    courses;
    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }

    constructor(service : CoursesService) {
        this.courses = service.getCourses();
    }
    
    getTitle() {
        return this.title;
    }

    onClick($event) {
        alert("Button Clicked")
        console.log($event)
    }

    onKeyUp() {
        console.log(this.email);
    }
}