package org.eggsoft.cn.beans;


import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@NoArgsConstructor
@Accessors(chain = true)
@Entity
@Table(name = "player_teamplayerconfig")
public class TeamPlayerConfig implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long teamplayerid;

    private String configtype;
    private String configname;

    private double value;
    private boolean active=true;


    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date CreateTime=new Date();
    private Date UpdateTime;
    private boolean isdeleted=false;
}