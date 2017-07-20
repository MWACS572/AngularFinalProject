import {Component, OnInit, Input} from '@angular/core';
import {DataService} from '../../services/data.service'
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from "rxjs/Rx";
import {SwiftPipe} from '../../pipes/swift.pipe';
import {AuthService} from "../../services/auth.service";
@Component({
  selector: 'joblist-Comp',
  template: `
    <fieldset style="width:400px">
      <legend>Search Job Posts Using</legend>
      <Button>Current Location</Button>
      <Button (click)='getpostByFee()'>Minimum Fee</Button>
      <select #t (change)="callType(t.value)">
        <option>SelectCategory</option>
        <option *ngFor="let post of allposts|unique">{{post.category}}</option>
      </select>
    </fieldset>
    <table border="1px">
      <tr>
        <th>Category</th>
        <th>Type Of Work</th>
        <th>Date of Work</th>
        <th>Address</th>
        <th>Details</th>
      </tr>
      <tr *ngFor="let post of posts">
        <td>{{post.category}}</td>
        <td id="{{post._id}}">{{post.name}}</td>
        <td>{{post.preferedDate | date:'medium'}}</td>
        <td>{{post.location}}</td>
        <td><a [routerLink]="['postdetail',post._id]">Show Details</a></td>
      </tr>
    </table>



  `,
  styles: []
})
export class joblistComponent implements OnInit {
  posts;
  email: String = this.auth.getUser().email;
  iputdata;
  catArray;
  longitude;
  latitude;
  value2;

  constructor(private route: ActivatedRoute, private dbService: DataService, private router: Router, private auth: AuthService) {
    // this.route.params.subscribe(params => {this.iputdata = params['input']} );
    console.log("this.posts");
    this.dbService.getPosts(this.email).subscribe(res => {
      this.posts = res;
      console.log(this.posts);
    });
    //console.log(this.posts);
  }

  myLocation;
  MaxFee;
  allposts;
  selectedCat

// consumedata(assign){
// this.iputdata = assign;
// }
  ngOnInit() {
    this.getallPosts();

  }


  getpostByLocation() {
    // this.dbService.getPosts(this.myLocation).subscribe(res=>{this.posts = res});
  }

  getpostByFee() {
    this.router.navigate(['minFeePosts']);

  }

  getallPosts() {
    this.dbService.getallPosts().subscribe(res => {
      this.allposts = res
    });
    ;
  }

  callType(value) {
    this.selectedCat = value;
    console.log(this.selectedCat);
    this.getPostByCat();
  }

  getPostByCat() {
    if (this.selectedCat != 'SelectCategory')
      this.router.navigate(['CatPosts/' + this.selectedCat]);
  }

}



