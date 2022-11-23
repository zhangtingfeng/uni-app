package org.eggsoft.cn.Controller;


import org.eggsoft.cn.Service.IprecordService;
import org.eggsoft.cn.Service.UserService;
import org.eggsoft.cn.beans.Dictionary;
import org.eggsoft.cn.beans.Iprecord;
import org.eggsoft.cn.beans.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/iprecord")
public class IprecordController {

    @Autowired
    private IprecordService iprecordService;

    @RequestMapping(method = RequestMethod.POST, value = "/save")
    synchronized public Iprecord save(@RequestBody Iprecord iprecord) {
        iprecordService.save(iprecord);
        //Assert.assertNotNull(student.getId());
        return  iprecord;
    }
}