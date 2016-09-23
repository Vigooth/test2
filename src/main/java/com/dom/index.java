package com.dom;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by Gauth on 19/09/2016.
 */
@Controller
public class index {
    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public String home() {
        return "index";
    }

}